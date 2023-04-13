# Cruise Ships

This is a JavaScript exercise in object dependency, created as part of my studies with the Command Shift bootcamp.

## Installation

The project is designed to be run locally in the browser.

To clone the project to your machine, navigate to your desired directory in the terminal and run:

`git clone https://github.com/JordsCodes/cruise-ships`

To run the project, navigate to the cruise-ships directory in the terminal and run:

`open index.html`
## Usage

The project simulates a cruise ship. In the src folder you will find js files for ship, itinerary, port, and controller. Port objects are instantiated and passed into Itinerary objects, and these Itinerary objects are passed into the Ship object.

The user can add ports via the form present on the index.html webpage. Clicking "submit" initialises a port object named with the provided string, which is then pushed to the itinerary array object, which is a property of the ship object. Further submissions will render more ports.

When the user is ready to set sail, the "Set Sail" button in the viewport can be clicked. A departure and arrival message will be rendered on the screen. The user is free to add more ports to the itinerary at any time.

To see the project in its local pre-gui test-driven development phase, please see: https://github.com/JordsCodes/cruise-ships.

## Credits

Command Shift:

https://github.com/CommandShiftHQ

Jordan Noble:

https://twitter.com/JordsCodes

https://www.linkedin.com/in/jordan-noble-a9b931267/



