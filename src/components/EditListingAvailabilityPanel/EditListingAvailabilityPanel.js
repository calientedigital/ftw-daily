import React from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { ensureOwnListing } from '../../util/data';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ListingLink } from '../../components';
import { EditListingDaysForm } from '../../forms';

import css from './EditListingAvailabilityPanel.css';
const FEATURES_NAME = 'diasDisponibles';
const EditListingAvailabilityPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    availability,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;
  
  const currentListing = ensureOwnListing(listing);
  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  
  
  const { publicData } = currentListing.attributes;
  const diasDisponibles = publicData && publicData.diasDisponibles;
  const initialValues = { diasDisponibles };
  const classes = classNames(rootClassName || css.root, className);
  
  const defaultAvailabilityPlan = {
    type: 'availability-plan/day',
    entries: [
      { dayOfWeek: 'mon', seats: 1 },
      { dayOfWeek: 'tue', seats: 1 },
      { dayOfWeek: 'wed', seats: 1 },
      { dayOfWeek: 'thu', seats: 1 },
      { dayOfWeek: 'fri', seats: 1 },
      { dayOfWeek: 'sat', seats: 1 },
      { dayOfWeek: 'sun', seats: 1 },
    ],
  };
  const availabilityPlan = currentListing.attributes.availabilityPlan || defaultAvailabilityPlan;
  
  // <!--<h1 className={css.title}>-->
  return (
    <div className={classes}>
      
      <h1>Selecciona los días que tu producto/servicio están disponibles
        {isPublished ? (
          // <FormattedMessage
          //   id="EditListingAvailabilityPanel.title"
          //   values={{ listingTitle: <ListingLink listing={listing} /> }}
          // />
          <h1>Selecciona los días que tu producto/servicio están disponibles</h1>
        ) : (
          <p></p>
          // <FormattedMessage id="EditListingAvailabilityPanel.createListingTitle" />
        )}
      </h1>
      <EditListingDaysForm
        className={css.form}
        name={FEATURES_NAME}
        initialValues={initialValues}
        onSubmit={values => {
          const { diasDisponibles = [] } = values;

          const updatedValues = {
            publicData: { diasDisponibles },
          };
          console.log("VALORES OBTENIDOS");
          console.log(updatedValues);
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
      {/* <EditListingAvailabilityForm
        className={css.form}
        listingId={currentListing.id}
        initialValues={{ availabilityPlan }}
        availability={availability}
        availabilityPlan={availabilityPlan}
        onSubmit={() => {
          // We save the default availability plan
          // I.e. this listing is available every night.
          // Exceptions are handled with live edit through a calendar,
          // which is visible on this panel.
          onSubmit({ availabilityPlan });
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        disabled={disabled}
        ready={ready}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
      /> */}
    </div>
  );
};

EditListingAvailabilityPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingAvailabilityPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  // availability: shape({
  //   calendar: object.isRequired,
  //   onFetchAvailabilityExceptions: func.isRequired,
  //   onCreateAvailabilityException: func.isRequired,
  //   onDeleteAvailabilityException: func.isRequired,
  // }).isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingAvailabilityPanel;
