# graphs/sample_graph.py
from typing import Dict, TypedDict, List
from langgraph.graph import StateGraph, END

# Define the state structure
class GraphState(TypedDict):
    question: str
    answer: str

# Define a simple processing function
def process(state: GraphState) -> GraphState:
    """Process the question and generate an answer."""
    question = state.get("question", "")
    
    answer = f"This is a demo response to: '{question}'"
    
    return {
        **state,
        "answer": answer
    }

# Build the graph
def build_graph():
    # Initialize the graph
    graph = StateGraph(GraphState)
    
    # Add a single node
    graph.add_node("process", process)
    
    # Add edges
    graph.add_edge("process", END)
    
    # Set the entry point
    graph.set_entry_point("process")
    
    # Compile the graph
    return graph.compile()

# Create a main function to run the graph
async def process_question(question: str):
    graph = build_graph()
    
    # Initialize the state
    initial_state = {"question": question, "answer": ""}
    
    # Run the graph
    result = await graph.ainvoke(initial_state)
    
    return result