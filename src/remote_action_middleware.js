/**
 * Created by Paul.Knox-Kennedy on 29/03/16.
 */
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}