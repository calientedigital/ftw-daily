import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import CustomHourSelectField from './CustomHourSelectField';
import { propTypes } from '../../util/types';
import { intlShape, injectIntl } from '../../util/reactIntl';
import { maxLength, required, composeValidators } from '../../util/validators';
import config from '../../config';
import { Button, FieldCheckboxGroup, Form } from '../../components';
import { compose } from 'redux';
import css from './EditListingFeaturesForm.css';

const EditListingDaysFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        categories,
        intl,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;
      const categoryLabelBegin = "Hora de inicio:";
      const categoryPlaceholderBegin = "Seleccione su hora de inicio";
      const categoryRequiredBegin = required(
        "Hora de inicio es obligatoria"
      );
      const categoryLabelEnd = "Hora de fin:";
      const categoryPlaceholderEnd = "Seleccione su hora de fin";
      const categoryRequiredEnd = required(
        "Hora de fin es obligatoria"
      );
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldCheckboxGroup
            className={css.features}
            id={name}
            name={name}
            options={config.custom.diasDisponibles}
          />
          <div class="row">
          <CustomHourSelectField
            id="begin"
            name="begin"
            categories={categories}
            intl={intl}
            categoryLabel={categoryLabelBegin}
            categoryPlaceholder={categoryPlaceholderBegin}
            categoryRequired = {categoryRequiredBegin}
          />
          <CustomHourSelectField
            id="end"
            name="end"
            categories={categories}
            intl={intl}
            categoryLabel={categoryLabelEnd}
            categoryPlaceholder={categoryPlaceholderEnd}
            categoryRequired = {categoryRequiredEnd}
          />
          </div>
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDaysFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingDaysFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

const EditListingDaysForm = EditListingDaysFormComponent;

export default compose(injectIntl)(EditListingDaysForm);
