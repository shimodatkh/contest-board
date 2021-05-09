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
proto.contestboard.contestBoardServiceClient =
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
proto.contestboard.contestBoardServicePromiseClient =
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
 *   !proto.contestboard.putMeasurementReq,
 *   !proto.contestboard.putMeasurementRes>}
 */
const methodDescriptor_contestBoardService_putMeasurement = new grpc.web.MethodDescriptor(
  '/contestboard.contestBoardService/putMeasurement',
  grpc.web.MethodType.UNARY,
  proto.contestboard.putMeasurementReq,
  proto.contestboard.putMeasurementRes,
  /**
   * @param {!proto.contestboard.putMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.putMeasurementRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contestboard.putMeasurementReq,
 *   !proto.contestboard.putMeasurementRes>}
 */
const methodInfo_contestBoardService_putMeasurement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.contestboard.putMeasurementRes,
  /**
   * @param {!proto.contestboard.putMeasurementReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.putMeasurementRes.deserializeBinary
);


/**
 * @param {!proto.contestboard.putMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contestboard.putMeasurementRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contestboard.putMeasurementRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contestboard.contestBoardServiceClient.prototype.putMeasurement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contestboard.contestBoardService/putMeasurement',
      request,
      metadata || {},
      methodDescriptor_contestBoardService_putMeasurement,
      callback);
};


/**
 * @param {!proto.contestboard.putMeasurementReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contestboard.putMeasurementRes>}
 *     Promise that resolves to the response
 */
proto.contestboard.contestBoardServicePromiseClient.prototype.putMeasurement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contestboard.contestBoardService/putMeasurement',
      request,
      metadata || {},
      methodDescriptor_contestBoardService_putMeasurement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contestboard.getMeasurementsReq,
 *   !proto.contestboard.getMeasurementsRes>}
 */
const methodDescriptor_contestBoardService_getMeasurements = new grpc.web.MethodDescriptor(
  '/contestboard.contestBoardService/getMeasurements',
  grpc.web.MethodType.UNARY,
  proto.contestboard.getMeasurementsReq,
  proto.contestboard.getMeasurementsRes,
  /**
   * @param {!proto.contestboard.getMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.getMeasurementsRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contestboard.getMeasurementsReq,
 *   !proto.contestboard.getMeasurementsRes>}
 */
const methodInfo_contestBoardService_getMeasurements = new grpc.web.AbstractClientBase.MethodInfo(
  proto.contestboard.getMeasurementsRes,
  /**
   * @param {!proto.contestboard.getMeasurementsReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contestboard.getMeasurementsRes.deserializeBinary
);


/**
 * @param {!proto.contestboard.getMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contestboard.getMeasurementsRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contestboard.getMeasurementsRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contestboard.contestBoardServiceClient.prototype.getMeasurements =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contestboard.contestBoardService/getMeasurements',
      request,
      metadata || {},
      methodDescriptor_contestBoardService_getMeasurements,
      callback);
};


/**
 * @param {!proto.contestboard.getMeasurementsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contestboard.getMeasurementsRes>}
 *     Promise that resolves to the response
 */
proto.contestboard.contestBoardServicePromiseClient.prototype.getMeasurements =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contestboard.contestBoardService/getMeasurements',
      request,
      metadata || {},
      methodDescriptor_contestBoardService_getMeasurements);
};


module.exports = proto.contestboard;

