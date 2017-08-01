import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pencil from 'react-icons/lib/fa/pencil';

import Loading from '../Loading';
import NotFound from '../NotFound';

import { createArticle } from '../../actions';

import styles from './withRequestData.css';

const withRequestData = (WrappedComponent, {
  fetchAction,
  fieldData,
  title,
  loadingText,
}) => {
  class WrapperComponent extends Component {

    static propTypes = {
      data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
      dispatch: PropTypes.func.isRequired,
      err: PropTypes.string, // eslint-disable-line react/forbid-prop-types
      isFetching: PropTypes.bool.isRequired,
      match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    constructor(props) {
      super(props);
      this.addArticle = this.addArticle.bind(this);
    }

    componentDidMount() {
      const { match, dispatch } = this.props;
      dispatch(fetchAction(match.params));
    }

    addArticle() {
      const { dispatch } = this.props;
      dispatch(createArticle({
        author: 'Yo mismo',
        title: 'Mi titulo',
        content: 'El queso es un alimento sólido elaborado a partir de la leche cuajada de vaca, cabra, oveja, búfala, camello u otros mamíferos rumiantes. La leche es inducida a cuajarse usando una combinación de cuajo (o algún sustituto) y acidificación. Las bacterias se encargan de acidificar la leche, jugando también un papel importante en la definición de la textura y el sabor de la mayoría de los quesos. Algunos también contienen mohos, tanto en la superficie exterior como en el interior. Para los antiguos griegos «el queso era un regalo de los dioses». Hay centenares de variedades de queso. Sus diferentes estilos y sabores son el resultado del uso de distintas especies de bacterias y mohos, diferentes niveles de nata en la leche, variaciones en el tiempo de curación, diferentes tratamientos en su proceso y diferentes razas de vacas, cabras o el mamífero cuya leche se use. Otros factores incluyen la dieta del ganado y la adición de agentes saborizantes tales como hierbas, especias o ahumado. Que la leche esté o no pasteurizada también puede afectar al sabor. Para algunos quesos se cuaja la leche añadiéndole ácidos tales como vinagre o jugo de limón. Sin embargo, la mayoría se acidifican en grado menor gracias a las bacterias que se le añaden, que transforman los azúcares de la leche en ácido láctico, a lo que sigue la adición de cuajo para completar el proceso de cuajado. El cuajo es una enzima tradicionalmente obtenida del estómago del ganado lactante, pero actualmente también se producen sustitutos microbiológicos en laboratorio. También se han extraído «cuajos vegetales» de varias especies de la familia de cardos Cynara. La palabra queso deriva del latín caseus. Sin embargo en la época romana se hizo famoso el término formaticum entre los legionarios, de caseus formatus, que significa queso moldeado. Así se tiene que en francés se diga fromage, en italiano formaggio o en catalán formatge.',
        tags: ['Ciencia', 'Entretenimiento', 'Tecnología'],
        published: false,
      }));
    }

    render() {
      const { data, err, isFetching, ...rest } = this.props;
      return (
        <main className={styles.main}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button onClick={this.addArticle} className={styles.newArticle}>
              <Pencil className={styles.icon} size={30} />
              <span className={styles.buttonText}>write your article</span>
            </button>
          </header>
          {(() => {
            if (isFetching) {
              return <Loading text={loadingText} />;
            }
            if (err) {
              return <NotFound text={err} />;
            }
            return <WrappedComponent data={data[fieldData]} {...rest} />;
          })()}
        </main>
      );
    }

  }

  const mapStateToProps = state => {
    const {
      isFetching,
      err,
      data,
    } = state;

    return {
      isFetching,
      err,
      data,
    };
  };

  return connect(mapStateToProps)(WrapperComponent);
};

export default withRequestData;
