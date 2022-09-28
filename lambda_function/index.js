exports.handler = async (event) => {
  // TODO implement
  const botRes =  [{
      'type': 'unstructured',
      'unstructured': {
        'text': "Application under development. Search functionality will be implemented in Assignment 2"
      }
  }]
    
  return {
      'statusCode': 200,
      'messages': botRes
  }
};