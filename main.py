from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import langgraph
import importlib.util
import os
import sys
import asyncio

# Add the graphs directory to the Python path
sys.path.append("/app")

app = FastAPI(title="LangGraph API")

# Add CORS middleware to allow frontend to communicate with API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

class QuestionRequest(BaseModel):
    question: str

class GraphResponse(BaseModel):
    result: dict

@app.get("/")
async def root():
    """Simple health check endpoint."""
    return {
        "message": "LangGraph server is running",
        "version": langgraph.__version__,
        "available_graphs": list_available_graphs()
    }

@app.get("/ui")
async def get_ui():
    """Serve the UI HTML page."""
    return FileResponse("/app/index.html")

def list_available_graphs():
    """List all available graph modules in the graphs directory."""
    graphs_dir = "/app/graphs"
    if not os.path.exists(graphs_dir):
        return []
    
    available_graphs = []
    for file in os.listdir(graphs_dir):
        if file.endswith(".py") and not file.startswith("__"):
            available_graphs.append(file[:-3])  # Remove .py extension
    
    return available_graphs

@app.post("/process/{graph_name}", response_model=GraphResponse)
async def process_with_graph(graph_name: str, request: QuestionRequest):
    """Process a question using the specified graph."""
    try:
        # Dynamically import the specified graph module
        graph_module_path = f"graphs.{graph_name}"
        
        # Check if the module exists
        if graph_name not in list_available_graphs():
            raise HTTPException(status_code=404, detail=f"Graph '{graph_name}' not found")
        
        # Import the module
        graph_module = importlib.import_module(graph_module_path)
        
        # Run the process_question function
        if hasattr(graph_module, "process_question"):
            result = await graph_module.process_question(request.question)
            return {"result": result}
        else:
            raise HTTPException(
                status_code=400, 
                detail=f"Graph module '{graph_name}' does not have a 'process_question' function"
            )
    except ImportError as e:
        raise HTTPException(status_code=500, detail=f"Error importing graph module: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing question: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)