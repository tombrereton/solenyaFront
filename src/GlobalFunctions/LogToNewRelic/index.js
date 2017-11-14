const logToNewRelic = (logMessage) => {
  newrelic.addPageAction(logMessage);
}

export default logToNewRelic;
