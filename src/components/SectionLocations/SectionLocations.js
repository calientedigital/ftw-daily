import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';


import foodImage from './images/comida.jpg';
import toolsImage from './images/herramientas.jpg';
import animalsImage from './images/mascotas.jpg';
import clasesImage from './images/clases.jpg';
import childrenImage from './images/ninos.jpg';
import bienestarImage from './images/bienestar.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, desc, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
      <div className={css.descText}>
        <p className={css.descText}> {desc}</p>
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Comida',
          foodImage,
          'Si eres de los que ama la cocina o tienes uno de esos postres que todos alaban, porque no compartirlo en tu comunidad, estamos seguros que en habitanto todos estamos dispuestos a chuparnos los dedos con increíbles creaciones. ',
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
        )}
        {locationLink(
          'Servicios de hogar',
          toolsImage,
          'Hay tantas cosas que no sabemos hacer y que nuestro hogar necesita, arreglar una tubería o los arreglos eléctricos, pues día a día se inscriben más habitantos profesionales, que están listos para ayudarte en casa. Al final solo buscamos casas felices.',
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
        {locationLink(
          'Mascotas',
          animalsImage,
          'Esos peludos que se vuelven parte de la familia, como no quererlos, pues aquí encontrarás algunos servicios o productos hechos solo para ellos, que bueno es compartir lo que tienes para darlo a los demás. ',
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
        )}
      </div>
      <div className={css.locations}>
        {locationLink(
          'Clases',
          clasesImage,
          'Si quieres aprender a cantar o tener clases de yoga dirigidas, personal instructors o simplemente quieres aprender a bailar, muchos pueden ayudarte aquí, compartamos conocimientos, disfrutemos juntos. ',
          '?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
        )}
        {locationLink(
          'Niños',
          childrenImage,
          'Desde los más pequeñitos hasta los más grandes, ellos son el centro del hogar, quieres nanas o babysiters, si alguien sabe hacer compotas, juguetes didácticos este es el espacio perfecto para compartirlo.  ',
          '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
        )}
        {locationLink(
          'Bienestar',
          bienestarImage,
          'Si eres de los que les gusta cuidarse, has desarrollado tus productos orgánicos, te gustaría mostrarle al mundo más sobre como cuidar el planeta o puedes compartir tus conocimientos saludables, ponte creativo y crea tu producto, muchos te lo agradecerán.',
          '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
