import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const NavbarNormal = () => {

  const html = 'const a = 0;';
  const css = 'const a = 0;';
  return(      
    <section>
      <h4>Navbar Normal</h4>
      <p>"Scrolla" junto com a página.</p>
      <div>
        <div>          
          <h5>HTML</h5>
          <CodeMirror
            value={html}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              mode: 'jsx',
              readOnly: true
            }}
          />
        </div>
        <div>
          <h5>SCSS</h5>
          <CodeMirror
            value={html}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              mode: 'jsx',
              readOnly: true
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default NavbarNormal