// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var cat_pb = require('./cat_pb.js');

function serialize_GetMyCatMessage(arg) {
  if (!(arg instanceof cat_pb.GetMyCatMessage)) {
    throw new Error('Expected argument of type GetMyCatMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMyCatMessage(buffer_arg) {
  return cat_pb.GetMyCatMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MyCatResponse(arg) {
  if (!(arg instanceof cat_pb.MyCatResponse)) {
    throw new Error('Expected argument of type MyCatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MyCatResponse(buffer_arg) {
  return cat_pb.MyCatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CatService = exports.CatService = {
  getMyCat: {
    path: '/Cat/GetMyCat',
    requestStream: false,
    responseStream: false,
    requestType: cat_pb.GetMyCatMessage,
    responseType: cat_pb.MyCatResponse,
    requestSerialize: serialize_GetMyCatMessage,
    requestDeserialize: deserialize_GetMyCatMessage,
    responseSerialize: serialize_MyCatResponse,
    responseDeserialize: deserialize_MyCatResponse,
  },
};

exports.CatClient = grpc.makeGenericClientConstructor(CatService);
