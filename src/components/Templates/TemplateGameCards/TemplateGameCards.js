import React, {Suspense, useContext} from "react"
import PropTypes from 'prop-types';
import {categoriesContext} from '../../Contexts/GameCards/GameCards';

const ItemListContainer = React.lazy(() => import('./../../Organisms/ItemListContainer/ItemListContainer'));

require('./TemplateGameCards.css')

function TemplateGameCards({header, mainTitle, filters, slider, footer}) {

  const [activeCategories] = useContext(categoriesContext);

  return <>
    {header}
    <main className="main-sections">
      <section className="container-xxl white-striped-background">
        <div className="main-sections__title">{mainTitle}</div>
      </section>
      <section className="container-xxl bg-darker-1">
        <div className="main-sections__filters">{filters}</div>
      </section>
      {
        activeCategories && activeCategories.length > 0 &&
        <Suspense fallback={<h4 className="text-center text-white py-2">Loading</h4>}>

          <section className="container-xxl white-striped-background pb-5">
            <div className="main-sections__filteredItems py-5">
              <ItemListContainer categories={activeCategories} />
            </div>
          </section>

        </Suspense>
      }
      <section className="container-xxl main-sections__slider">{slider}</section>
    </main>
    <footer className="main-footer">{footer}</footer>
  </>
}

TemplateGameCards.propTypes = {
  header: PropTypes.node.isRequired,
  mainTitle: PropTypes.node.isRequired,
  filters: PropTypes.node.isRequired,
  slider: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default TemplateGameCards
