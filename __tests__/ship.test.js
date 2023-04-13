const { Ship } = require('../src/ship');

describe ('ship', () => {
  let amsterdam;
  let lochness;

  describe('with ports and an itinerary', () => {
    beforeEach(() => {
      amsterdam = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Amsterdam',
        ships: []
      };
      lochness = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Loch Ness',
        ships: []
      };
      itinerary = {
        ports: [amsterdam, lochness]
      };
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(amsterdam);
    });

    it('has a previous port', () => {
      expect(ship.previousPort).toBeFalsy();
    });

    it('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(amsterdam.removeShip).toHaveBeenCalledWith(ship);
    });

    it('can dock at a new port', () => {
      ship.setSail();
      ship.dock();

      expect(amsterdam.removeShip).toHaveBeenCalledWith(ship);
      expect(lochness.addShip).toHaveBeenCalledWith(ship);
    });

    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('gets added to port on instantiation', () => {
      expect(amsterdam.addShip).toHaveBeenCalledWith(ship);
    });
  });
});


