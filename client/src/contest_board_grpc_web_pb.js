/**
 * @fileoverview gRPC-Web generated client stub for contestboard
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.contestboard = require('./contest_board_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.contestboard.ContestBoardClient =
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
proto.contestboard.ContestBoardPromiseClient =
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
 *   !proto.contestboard.PutMeasurementReq,
 *   !proto.contestboard.PutMeasurementRes>}
 */
const methodDescriptor_ContestBoard_PutMeasurement = new grpc.web.MethodDescriptor(
  '/contestboard.ContestBoard/PutMeasurement',
  grpc.web.MethodType.UNARY,
  proto.contestboard.PutMeasurementReq,
  proto.contestboard.PutMeasurementRes,
  /**
   * @param {!proto.contestboard.PutMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.PutMeasurementRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contestboard.PutMeasurementReq,
 *   !proto.contestboard.PutMeasurementRes>}
 */
const methodInfo_ContestBoard_PutMeasurement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.contestboard.PutMeasurementRes,
  /**
   * @param {!proto.contestboard.PutMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.PutMeasurementRes.deserializeBinary
);


/**
 * @param {!proto.contestboard.PutMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contestboard.PutMeasurementRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contestboard.PutMeasurementRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contestboard.ContestBoardClient.prototype.putMeasurement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contestboard.ContestBoard/PutMeasurement',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_PutMeasurement,
      callback);
};


/**
 * @param {!proto.contestboard.PutMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contestboard.PutMeasurementRes>}
 *     Promise that resolves to the response
 */
proto.contestboard.ContestBoardPromiseClient.prototype.putMeasurement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contestboard.ContestBoard/PutMeasurement',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_PutMeasurement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contestboard.GetMeasurementsReq,
 *   !proto.contestboard.GetMeasurementsRes>}
 */
const methodDescriptor_ContestBoard_GetMeasurements = new grpc.web.MethodDescriptor(
  '/contestboard.ContestBoard/GetMeasurements',
  grpc.web.MethodType.UNARY,
  proto.contestboard.GetMeasurementsReq,
  proto.contestboard.GetMeasurementsRes,
  /**
   * @param {!proto.contestboard.GetMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.GetMeasurementsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contestboard.GetMeasurementsReq,
 *   !proto.contestboard.GetMeasurementsRes>}
 */
const methodInfo_ContestBoard_GetMeasurements = new grpc.web.AbstractClientBase.MethodInfo(
  proto.contestboard.GetMeasurementsRes,
  /**
   * @param {!proto.contestboard.GetMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.GetMeasurementsRes.deserializeBinary
);


/**
 * @param {!proto.contestboard.GetMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contestboard.GetMeasurementsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contestboard.GetMeasurementsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contestboard.ContestBoardClient.prototype.getMeasurements =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contestboard.ContestBoard/GetMeasurements',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_GetMeasurements,
      callback);
};


/**
 * @param {!proto.contestboard.GetMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contestboard.GetMeasurementsRes>}
 *     Promise that resolves to the response
 */
proto.contestboard.ContestBoardPromiseClient.prototype.getMeasurements =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contestboard.ContestBoard/GetMeasurements',
      request,
      metadata || {},
      methodDescriptor_ContestBoard_GetMeasurements);
};


module.exports = proto.contestboard;

