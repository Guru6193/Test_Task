# Test_Task
Interview task
# Test Task Assignment

This project is a React application with WebSocket integration, simulating real-time data updates.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository to your local machine**.

git clone https://github.com/Guru6193/Test_Task.git
cd Test_Task/test-react-app

2. **Install dependencies**.
npm install
Running the Application

3. **Start the React development server:**
npm start
The application will be available at http://localhost:3000 in your web browser.

4. **Features**
Real-time data updates using WebSocket.
Displaying user information in a table.
Deleting users from the table.

5. **File Structure**
src/App.js: Main application component.
src/WebSocketComponent.js: WebSocket integration component.
src/components/UsersTable.js: Component for displaying user information.

6. **Usage**
The application automatically generates fake user data and updates the table every second.
Users can be deleted by clicking the "Delete" button in the table.

7. **Limitations**
The application currently uses a hardcoded WebSocket server URL (ws://localhost:3050). Make sure the WebSocket server is running.
