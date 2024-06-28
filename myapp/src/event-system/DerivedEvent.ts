import CommonEvent from './CommonEvent';
import { DerivedEventType } from './types/EventType';
import Handler from './types/Handler';

class DerivedEvent extends CommonEvent {
  public handlers: Handler[] = [];
  constructor(type: DerivedEventType) {
    super(type);
  }
}

export default DerivedEvent;
