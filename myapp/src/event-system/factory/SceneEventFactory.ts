import ActionEvent from '../ActionEvent';
import CommonEvent from '../CommonEvent';
import EventType from '../types/EventType';
import EventFactory from './EventFactory';

class SceneEventFactory implements EventFactory {
  constructor() {}

  createEvent(eventType: EventType): CommonEvent {
    try{
      return new ActionEvent(eventType);
    }
    return ;
  }
}

export default SceneEventFactory;