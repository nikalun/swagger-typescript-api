/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HttpClient, RequestParams } from "./http-client";
import { Error, AuthentiqID } from "./data-contracts";

/**
 * @title Authentiq
 * @version 6
 * @baseUrl https://6-dot-authentiqio.appspot.com/
 * Strong authentication, without the passwords.
 */
export class Key extends HttpClient {
  /**
   * @description Revoke an Authentiq ID using email & phone. If called with `email` and `phone` only, a verification code will be sent by email. Do a second call adding `code` to complete the revocation.
   *
   * @tags key, delete
   * @name key_revoke_nosecret
   * @request DELETE:/key
   */
  keyRevokeNosecret = (query: { email: string; phone: string; code?: string }, params?: RequestParams) =>
    this.request<{ status?: string }, Error>(`/key${this.addQueryParams(query)}`, "DELETE", params);
  /**
   * @description Register a new ID `JWT(sub, devtoken)` v5: `JWT(sub, pk, devtoken, ...)` See: https://github.com/skion/authentiq/wiki/JWT-Examples
   *
   * @tags key, post
   * @name key_register
   * @request POST:/key
   */
  keyRegister = (body: AuthentiqID, params?: RequestParams) =>
    this.request<{ secret?: string; status?: string }, Error>(`/key`, "POST", params, body);
  /**
   * @description Revoke an Identity (Key) with a revocation secret
   *
   * @tags key, delete
   * @name key_revoke
   * @request DELETE:/key/{PK}
   */
  keyRevoke = (PK: string, query: { secret: string }, params?: RequestParams) =>
    this.request<{ status?: string }, Error>(`/key/${PK}${this.addQueryParams(query)}`, "DELETE", params);
  /**
   * @description Get public details of an Authentiq ID.
   *
   * @tags key, get
   * @name getKey
   * @request GET:/key/{PK}
   */
  getKey = (PK: string, params?: RequestParams) =>
    this.request<{ since?: string; status?: string; sub?: string }, Error>(`/key/${PK}`, "GET", params);
  /**
   * @description HEAD info on Authentiq ID
   *
   * @tags key, head
   * @name headKey
   * @request HEAD:/key/{PK}
   */
  headKey = (PK: string, params?: RequestParams) => this.request<any, Error>(`/key/${PK}`, "HEAD", params);
  /**
   * @description update properties of an Authentiq ID. (not operational in v4; use PUT for now) v5: POST issuer-signed email & phone scopes in a self-signed JWT See: https://github.com/skion/authentiq/wiki/JWT-Examples
   *
   * @tags key, post
   * @name key_update
   * @request POST:/key/{PK}
   */
  keyUpdate = (PK: string, body: AuthentiqID, params?: RequestParams) =>
    this.request<{ status?: string }, Error>(`/key/${PK}`, "POST", params, body);
  /**
   * @description Update Authentiq ID by replacing the object. v4: `JWT(sub,email,phone)` to bind email/phone hash; v5: POST issuer-signed email & phone scopes and PUT to update registration `JWT(sub, pk, devtoken, ...)` See: https://github.com/skion/authentiq/wiki/JWT-Examples
   *
   * @tags key, put
   * @name key_bind
   * @request PUT:/key/{PK}
   */
  keyBind = (PK: string, body: AuthentiqID, params?: RequestParams) =>
    this.request<{ status?: string }, Error>(`/key/${PK}`, "PUT", params, body);
}
