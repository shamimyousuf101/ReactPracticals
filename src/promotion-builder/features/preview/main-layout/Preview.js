import React, {Component} from "react"

import bem from "bem-cn";
import PreviewList from "../sub-components/VisiblePreviewList";

const b = bem("promotion");

class Preview extends Component {
    render() {
        return (
          <main className={b("dynamic__content")}>
            <section className="searchContainer">
               <PreviewList/>
            </section>
          </main>
        );
    }
}

export default Preview;