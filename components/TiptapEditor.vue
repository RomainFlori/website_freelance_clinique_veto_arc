<template>
  <div v-if="editor" class="border border-slate-200 rounded-2xl overflow-hidden bg-white">
    <div class="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200">
      
      <button type="button" @click="editor.chain().focus().toggleBold().run()" :class="{ 'bg-emerald-600 text-white': editor.isActive('bold'), 'text-slate-600 hover:bg-slate-200': !editor.isActive('bold') }" class="w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all">B</button>
      <button type="button" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'bg-emerald-600 text-white': editor.isActive('italic'), 'text-slate-600 hover:bg-slate-200': !editor.isActive('italic') }" class="w-10 h-10 rounded-lg italic flex items-center justify-center transition-all">I</button>
      <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-emerald-600 text-white': editor.isActive('heading', { level: 2 }), 'text-slate-600 hover:bg-slate-200': !editor.isActive('heading', { level: 2 }) }" class="w-10 h-10 rounded-lg font-black flex items-center justify-center transition-all">H2</button>

      <div class="w-[1px] h-6 bg-slate-300 mx-1"></div>

      <button 
        type="button" 
        @click="editor.chain().focus().toggleBulletList().run()" 
        :class="{ 'bg-emerald-600 text-white': editor.isActive('bulletList'), 'text-slate-600 hover:bg-slate-200': !editor.isActive('bulletList') }" 
        class="px-3 h-10 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
      >
        • Liste
      </button>

      <div class="w-[1px] h-6 bg-slate-300 mx-1"></div>

      <div class="flex items-center gap-1.5 px-2">
        <button 
          v-for="color in colors" 
          :key="color.code"
          type="button"
          @click="editor.chain().focus().setColor(color.code).run()"
          :class="{ 'ring-2 ring-offset-2 ring-emerald-500 scale-110': editor.isActive('textStyle', { color: color.code }) }"
          class="w-6 h-6 rounded-full border border-black/10 transition-all hover:scale-110"
          :style="{ backgroundColor: color.code }"
          :title="color.name"
        ></button>
        
        <button 
          type="button"
          @click="editor.chain().focus().unsetColor().run()"
          class="ml-2 text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase tracking-tighter"
        >
          Effacer
        </button>
      </div>
    </div>

    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'       // Import nommé { }
import { TextStyle } from '@tiptap/extension-text-style' // Import nommé { }

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({
      heading: { levels: [2] },
      bulletList: { keepAttributes: true, keepMarks: true }
    }),
    TextStyle,
    Color,
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  editorProps: {
    attributes: {
      class: 'prose focus:outline-none min-h-[300px] p-6 max-w-none text-slate-700',
    },
  },
})

const colors = [
  { name: 'Noir', code: '#1e293b' },
  { name: 'Vert Arc', code: '#059669' },
  { name: 'Bleu', code: '#2563eb' },
  { name: 'Rouge', code: '#dc2626' },
  { name: 'Gris', code: '#64748b' },
]

watch(() => props.modelValue, (value) => {
  if (editor.value && editor.value.getHTML() !== value) {
    editor.value.commands.setContent(value, false)
  }
})
</script>

<style>

.ProseMirror em {
  font-style: italic !important;
}

.ProseMirror strong {
  font-weight: bold !important;
}

.ProseMirror {
  min-height: 300px;
  outline: none !important;
}

/* Styles pour que les listes soient visibles dans l'éditeur */
.ProseMirror ul {
  list-style-type: disc !important;
  padding-left: 1.5rem !important;
  margin: 1rem 0 !important;
}

.ProseMirror li {
  margin-bottom: 0.5rem !important;
}

.ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
</style>