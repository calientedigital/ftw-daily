// This file deals with Flex API which will create Stripe Custom Connect accounts
// from given bank_account tokens.
import config from '../config';
import { storableError } from '../util/errors';
import * as log from '../util/log';
import { denormalisedResponseEntities, ensureOwnListing } from '../util/data';

// ================ Action types ================ //

export const STRIPE_ACCOUNT_CREATE_REQUEST = 'app/stripe/STRIPE_ACCOUNT_CREATE_REQUEST';
export const STRIPE_ACCOUNT_CREATE_SUCCESS = 'app/stripe/STRIPE_ACCOUNT_CREATE_SUCCESS';
export const STRIPE_ACCOUNT_CREATE_ERROR = 'app/stripe/STRIPE_ACCOUNT_CREATE_ERROR';

export const STRIPE_ACCOUNT_UPDATE_REQUEST = 'app/stripe/STRIPE_ACCOUNT_UPDATE_REQUEST';
export const STRIPE_ACCOUNT_UPDATE_SUCCESS = 'app/stripe/STRIPE_ACCOUNT_UPDATE_SUCCESS';
export const STRIPE_ACCOUNT_UPDATE_ERROR = 'app/stripe/STRIPE_ACCOUNT_UPDATE_ERROR';

export const STRIPE_ACCOUNT_FETCH_REQUEST = 'app/stripe/STRIPE_ACCOUNT_FETCH_REQUEST';
export const STRIPE_ACCOUNT_FETCH_SUCCESS = 'app/stripe/STRIPE_ACCOUNT_FETCH_SUCCESS';
export const STRIPE_ACCOUNT_FETCH_ERROR = 'app/stripe/STRIPE_ACCOUNT_FETCH_ERROR';

export const STRIPE_ACCOUNT_CLEAR_ERROR = 'app/stripe/STRIPE_ACCOUNT_CLEAR_ERROR';

export const GET_ACCOUNT_LINK_REQUEST = 'app/stripeConnectAccount.duck.js/GET_ACCOUNT_LINK_REQUEST';
export const GET_ACCOUNT_LINK_SUCCESS = 'app/stripeConnectAccount.duck.js/GET_ACCOUNT_LINK_SUCCESS';
export const GET_ACCOUNT_LINK_ERROR = 'app/stripeConnectAccount.duck.js/GET_ACCOUNT_LINK_ERROR';

// ================ Reducer ================ //

const initialState = {
  createStripeAccountInProgress: false,
  createStripeAccountError: null,
  updateStripeAccountInProgress: false,
  updateStripeAccountError: null,
  fetchStripeAccountInProgress: false,
  fetchStripeAccountError: null,
  getAccountLinkInProgress: false,
  getAccountLinkError: null,
  stripeAccount: null,
  stripeAccountFetched: false,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case STRIPE_ACCOUNT_CREATE_REQUEST:
      return { ...state, createStripeAccountError: null, createStripeAccountInProgress: true };
    case STRIPE_ACCOUNT_CREATE_SUCCESS:
      return {
        ...state,
        createStripeAccountInProgress: false,
        stripeAccount: payload,
        stripeAccountFetched: true,
      };
    case STRIPE_ACCOUNT_CREATE_ERROR:
      console.error(payload);
      return { ...state, createStripeAccountError: payload, createStripeAccountInProgress: false };

    case STRIPE_ACCOUNT_UPDATE_REQUEST:
      return { ...state, updateStripeAccountError: null, updateStripeAccountInProgress: true };
    case STRIPE_ACCOUNT_UPDATE_SUCCESS:
      return {
        ...state,
        updateStripeAccountInProgress: false,
        stripeAccount: payload,
        stripeAccountFetched: true,
      };
    case STRIPE_ACCOUNT_UPDATE_ERROR:
      console.error(payload);
      return { ...state, updateStripeAccountError: payload, createStripeAccountInProgress: false };

    case STRIPE_ACCOUNT_FETCH_REQUEST:
      return { ...state, fetchStripeAccountError: null, fetchStripeAccountInProgress: true };
    case STRIPE_ACCOUNT_FETCH_SUCCESS:
      return {
        ...state,
        fetchStripeAccountInProgress: false,
        stripeAccount: payload,
        stripeAccountFetched: true,
      };
    case STRIPE_ACCOUNT_FETCH_ERROR:
      console.error(payload);
      return { ...state, fetchStripeAccountError: payload, fetchStripeAccountInProgress: false };

    case STRIPE_ACCOUNT_CLEAR_ERROR:
      return { ...initialState };

    case GET_ACCOUNT_LINK_REQUEST:
      return { ...state, getAccountLinkError: null, getAccountLinkInProgress: true };
    case GET_ACCOUNT_LINK_ERROR:
      console.error(payload);
      return { ...state, getAccountLinkInProgress: false, getAccountLinkError: payload };
    case GET_ACCOUNT_LINK_SUCCESS:
      return { ...state, getAccountLinkInProgress: false };

    default:
      return state;
  }
}

// ================ Action creators ================ //

export const stripeAccountCreateRequest = () => ({ type: STRIPE_ACCOUNT_CREATE_REQUEST });

export const stripeAccountCreateSuccess = stripeAccount => ({
  type: STRIPE_ACCOUNT_CREATE_SUCCESS,
  payload: stripeAccount,
});

export const stripeAccountCreateError = e => ({
  type: STRIPE_ACCOUNT_CREATE_ERROR,
  payload: e,
  error: true,
});

export const stripeAccountUpdateRequest = () => ({ type: STRIPE_ACCOUNT_UPDATE_REQUEST });

export const stripeAccountUpdateSuccess = stripeAccount => ({
  type: STRIPE_ACCOUNT_UPDATE_SUCCESS,
  payload: stripeAccount,
});

export const stripeAccountUpdateError = e => ({
  type: STRIPE_ACCOUNT_UPDATE_ERROR,
  payload: e,
  error: true,
});

export const stripeAccountFetchRequest = () => ({ type: STRIPE_ACCOUNT_FETCH_REQUEST });

export const stripeAccountFetchSuccess = stripeAccount => ({
  type: STRIPE_ACCOUNT_FETCH_SUCCESS,
  payload: stripeAccount,
});

export const stripeAccountFetchError = e => ({
  type: STRIPE_ACCOUNT_FETCH_ERROR,
  payload: e,
  error: true,
});

export const stripeAccountClearError = () => ({
  type: STRIPE_ACCOUNT_CLEAR_ERROR,
});

export const getAccountLinkRequest = () => ({
  type: GET_ACCOUNT_LINK_REQUEST,
});
export const getAccountLinkError = e => ({
  type: GET_ACCOUNT_LINK_ERROR,
  payload: e,
  error: true,
});
export const getAccountLinkSuccess = () => ({
  type: GET_ACCOUNT_LINK_SUCCESS,
});

// ================ Thunks ================ //

export const createStripeAccount = params => (dispatch, getState, sdk) => {
  if (typeof window === 'undefined' || !window.Stripe) {
    throw new Error('Stripe must be loaded for submitting PayoutPreferences');
  }
  const stripe = window.Stripe(config.stripe.publishableKey);

  let { country, accountType, bankAccountToken, businessProfileMCC, businessProfileURL } = params;
  console.log(country);
  
  // Capabilities are a collection of settings that can be requested for each provider.
  // What Capabilities are required determines what information Stripe requires to be
  // collected from the providers.
  // You can read more from here: https://stripe.com/docs/connect/capabilities-overview
  // In Flex both 'card_payments' and 'transfers' are required.
  const requestedCapabilities = ['card_payments', 'transfers'];
  const accountType2 = "individual";
  
  let accountInfo = {};
  country = "US";
  let bankToken="";
  dispatch(stripeAccountCreateRequest());
  let accountData = {
    country: "US",
    currency: "USD",
    routing_number: "110000000",
    account_number: "000123456789"

  }
  // https://test-marketplace.com/u/5e810cb7-4785-4206-8fb9-1fb06002d5a5

  // 

      const parameters = params || {
        include: ['profileImage', 'stripeAccount'],
        'fields.image': ['variants.square-small', 'variants.square-small2x'],
      };

      return sdk.currentUser
        .show(parameters)
        .then(response => {
          
          const entities = denormalisedResponseEntities(response);
          if (entities.length !== 1) {
            throw new Error('Expected a resource in the sdk.currentUser.show response');
          }
          const currentUser = entities[0];
          // console.log(currentUser.id);
          // console.log(currentUser.id.UUID);
          // console.log(currentUser.id.uuid);
          businessProfileURL=`https://caliente.world/u/${currentUser.id.uuid}`;
          console.log(businessProfileURL);

          businessProfileMCC="5734";
          accountInfo = {
            business_type: accountType2,
            tos_shown_and_accepted: true,
            account:{
              individual:{
                ssn_last_4:"6235",
                first_name: "Carolina",
                last_name: "Morochz",
                dob:{
                  day: 16,
                  month: 1,
                  year: 1985
                },

                email: "suscripciones@auconsis.com.ec",
                phone: "(954) 389-4016",
                address: {
                  line1: "16200 golf club rd",
                  postal_code: "33326",
                  city: "weston",
                  state: "FL"
                }
              }
            },
          }; //ACCOUNT INFO
          return stripe
            .createToken('bank_account', accountData)
            .then(result => {
              if (result.error) {
                const e = new Error(result.error.message);
                e.stripeError = result.error;
                throw e;
              }
              bankAccountToken = result.token.id;
              console.log(bankAccountToken);
              console.log(accountInfo);
              
              
              return stripe
              .createToken('account', accountInfo)
              .then(response => {
                const accountToken = response.token.id;
                console.log({
                  country,
                  accountToken,
                  bankAccountToken,
                  requestedCapabilities,
                  businessProfileMCC,
                  businessProfileURL,
                });  
                return sdk.stripeAccount.create(
                      {
                        country,
                        accountToken,
                        bankAccountToken,
                        requestedCapabilities,
                        businessProfileMCC,
                        businessProfileURL,
                      },
                      { expand: true }
                    );
                  })
                  .then(response => {
                    const stripeAccount = response.data.data;
                    console.log(response.data.data);
                    console.log(stripeAccount);
                    dispatch(stripeAccountCreateSuccess(stripeAccount));
                    return stripeAccount;
                  })
                  .catch(err => {
                    const e = storableError(err);
                    dispatch(stripeAccountCreateError(e));
                    const stripeMessage =
                      e.apiErrors && e.apiErrors.length > 0 && e.apiErrors[0].meta
                        ? e.apiErrors[0].meta.stripeMessage
                        : null;
                    log.error(err, 'create-stripe-account-failed', { stripeMessage });
                    throw e;
                  });
                
        });
  })
}

// This function is used for updating the bank account token
// but could be expanded to other information as well.
//
// If the Stripe account has been created with account token,
// you need to use account token also to update the account.
// By default the account token will not be used.
// See API reference for more information:
// https://www.sharetribe.com/api-reference/?javascript#update-stripe-account
export const updateStripeAccount = params => (dispatch, getState, sdk) => {
  const bankAccountToken = params.bankAccountToken;

  dispatch(stripeAccountUpdateRequest());
  return sdk.stripeAccount
    .update(
      { bankAccountToken, requestedCapabilities: ['card_payments', 'transfers'] },
      { expand: true }
    )
    .then(response => {
      const stripeAccount = response.data.data;
      dispatch(stripeAccountUpdateSuccess(stripeAccount));
      return stripeAccount;
    })
    .catch(err => {
      const e = storableError(err);
      dispatch(stripeAccountUpdateError(e));
      const stripeMessage =
        e.apiErrors && e.apiErrors.length > 0 && e.apiErrors[0].meta
          ? e.apiErrors[0].meta.stripeMessage
          : null;
      log.error(err, 'update-stripe-account-failed', { stripeMessage });
      throw e;
    });
};

export const fetchStripeAccount = params => (dispatch, getState, sdk) => {
  dispatch(stripeAccountFetchRequest());

  return sdk.stripeAccount
    .fetch()
    .then(response => {
      const stripeAccount = response.data.data;
      dispatch(stripeAccountFetchSuccess(stripeAccount));
      return stripeAccount;
    })
    .catch(err => {
      const e = storableError(err);
      dispatch(stripeAccountFetchError(e));
      const stripeMessage =
        e.apiErrors && e.apiErrors.length > 0 && e.apiErrors[0].meta
          ? e.apiErrors[0].meta.stripeMessage
          : null;
      log.error(err, 'fetch-stripe-account-failed', { stripeMessage });
      throw e;
    });
};

export const getStripeConnectAccountLink = params => (dispatch, getState, sdk) => {
  const { failureURL, successURL, type } = params;
  dispatch(getAccountLinkRequest());

  return sdk.stripeAccountLinks
    .create({
      failureURL,
      successURL,
      type,
      collect: 'currently_due',
    })
    .then(response => {
      // Return the account link
      return response.data.data.attributes.url;
    })
    .catch(err => {
      const e = storableError(err);
      dispatch(getAccountLinkError(e));
      const stripeMessage =
        e.apiErrors && e.apiErrors.length > 0 && e.apiErrors[0].meta
          ? e.apiErrors[0].meta.stripeMessage
          : null;
      log.error(err, 'get-stripe-account-link-failed', { stripeMessage });
      throw e;
    });
};
