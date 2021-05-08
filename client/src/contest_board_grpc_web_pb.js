/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./contest_board_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.ContestBoardClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.ContestBoardPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.PutMeasurementReq,
 *   !proto.proto.PutMeasurementRes>}
 */
const methodDescriptor_ContestBoard_PutMeasurement = new grpc.web.MethodDescriptor(
  '/proto.ContestBoard/PutMeasurement',
  grpc.web.MethodType.UNARY,
  proto.proto.PutMeasurementReq,
  proto.proto.PutMeasurementRes,
  /**
   * @param {!proto.proto.PutMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.PutMeasurementRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.PutMeasurementReq,
 *   !proto.proto.PutMeasurementRes>}
 */
const methodInfo_ContestBoard_PutMeasurement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.PutMeasurementRes,
  /**
   * @param {!proto.proto.PutMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.PutMeasurementRes.deserializeBinary
);


/**
 * @param {!proto.proto.PutMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.PutMeasurementRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.PutMeasurementRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ContestBoardClient.prototype.putMeasurement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ContestBoard/PutMeasurement',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_PutMeasurement,
      callback);
};


/**
 * @param {!proto.proto.PutMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.PutMeasurementRes>}
 *     Promise that resolves to the response
 */
proto.proto.ContestBoardPromiseClient.prototype.putMeasurement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ContestBoard/PutMeasurement',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_PutMeasurement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.GetMeasurementsReq,
 *   !proto.proto.GetMeasurementsRes>}
 */
const methodDescriptor_ContestBoard_GetMeasurements = new grpc.web.MethodDescriptor(
  '/proto.ContestBoard/GetMeasurements',
  grpc.web.MethodType.UNARY,
  proto.proto.GetMeasurementsReq,
  proto.proto.GetMeasurementsRes,
  /**
   * @param {!proto.proto.GetMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetMeasurementsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.GetMeasurementsReq,
 *   !proto.proto.GetMeasurementsRes>}
 */
const methodInfo_ContestBoard_GetMeasurements = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.GetMeasurementsRes,
  /**
   * @param {!proto.proto.GetMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetMeasurementsRes.deserializeBinary
);


/**
 * @param {!proto.proto.GetMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.proto.GetMeasurementsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.GetMeasurementsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ContestBoardClient.prototype.getMeasurements =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ContestBoard/GetMeasurements',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_GetMeasurements,
      callback);
};


/**
 * @param {!proto.proto.GetMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.GetMeasurementsRes>}
 *     Promise that resolves to the response
 */
proto.proto.ContestBoardPromiseClient.prototype.getMeasurements =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ContestBoard/GetMeasurements',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_GetMeasurements);
};


module.exports = proto.proto;

