import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import './styles/placeholder.css'

import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorBlock } from './plugins/EditorBlock'

export function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose prose-invert focus:outline-none',
      },
    },
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Untitled'
          }

          return "Type '/' to see commands..."
        },
      }),
      EditorBlock,
    ],
    content: `<h1>adsdsads</h1><editor-block name="test.tsx">const testando = new Codigo()</editor-block>`,
  })

  return (
    <>
      {/* <button onClick={() => console.log(editor?.getHTML())}>Print content</button> */}
      <EditorContent editor={editor} />
    </>
  )
}
