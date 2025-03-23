import logging
import math
import random
from mcp.server.fastmcp import FastMCP

logging.basicConfig(
    filename='git/devopsnextgenx/code-llm-comparison/logs/mcp_server.log',
    filemode='a',  # append mode
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# Throw a ball with such a speed to get range of 70m and height 40m, adjust range and speed according to returned response range distance and height of called function, call mcp tool max 5 times or less and give best possible option as response, if achived response within +/-0.5m for both range distance and height consider it as best

console = logging.StreamHandler()
console.setLevel(logging.INFO)
logging.getLogger('').addHandler(console)

# Log startup information
logging.info("Starting MCP server")


# Initialize the server
server = FastMCP("mcp-simulator", log_level="ERROR")

g = random.uniform(1, 25)
# g = 24.606359594181114

logging.info(f"Gravity is set to: {g}")

# Define and register the function as a tool
@server.tool(name="throwRangeAndHeight", description="Throw a ball, with a given speed and angle. Returns the distance the ball traveled and max height achieved.")
def throwRangeAndHeight(speed, angle):
    """Calculate the sum of two numbers
    
    Args:
        speed (float): speed of the ball
        angle (float): angle of the ball

    Returns:
        {
            "output": {
                "distance": float,
                "height": float
            },
            "input": {
                "speed": float,
                "angle": float
            }
        }
    """
    # Calculate the distance and height of the ball travelled using newtonian physics
    angle_rad = math.radians(angle)
    distance = (speed**2 * math.sin(2 * angle_rad)) / g
    height = (speed**2 * (math.sin(angle_rad))**2) / (2 * g)
    logging.info(f"throwRangeAndHeight (g: {g}) function called with: {speed}, {angle} -> {distance}, {height}")
    return {
        "output": {
            "distance": distance,
            "height": height,
        },
        "input": {
            "speed": speed,
            "angle": angle
        }
    }


if __name__ == "__main__":
    # Start the server
    server.run(transport="stdio")  # Based on the methods list, 'run' appears to be the correct method

