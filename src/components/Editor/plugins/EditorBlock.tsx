import { Node, textblockTypeInputRule } from '@tiptap/core'
import { mergeAttributes, ReactNodeViewRenderer } from '@tiptap/react'
import { WebContainerEditor } from '../WebContainerEditor'

export const backtickInputRegex = /^```([a-z]+)?[\s\n]$/

export const EditorBlock = Node.create({
  name: 'editorBlock',
  content: 'text*',
  code: true,
  group: 'block',
  atom: true,

  addInputRules() {
    return [
      textblockTypeInputRule({
        find: backtickInputRegex,
        type: this.type,
      }),
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(WebContainerEditor)
  },

  addAttributes() {
    return {}
  },

  parseHTML() {
    return [
      {
        tag: 'editor-block',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['editor-block', mergeAttributes(HTMLAttributes)]
  },
})
