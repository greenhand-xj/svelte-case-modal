import {writable} from 'svelte/store'

export const modal = writable({
  status: 'closed',
  title: null,
  component: null,
  params: {},
  firstFocusElement:null,
})

export const open = (title, params = {}, component) => {
  modal.set({
    status: 'opened',
    title,
    component,
    params,
    firstFocusElement: document.activeElement
  })
}

export const close = () => {
  modal.set({
    status: 'closed',
    title:null,
    component: null,
    param: null,
  })
}