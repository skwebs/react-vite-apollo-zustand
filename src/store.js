import create from 'zustand'

const useOverlayStore = create((set) => ({
    overlayStaus: false,
    openOverlay: () => set({ overlayStaus: true }),
    closeOverlay: () => set({ overlayStaus: false })
}))

export { useOverlayStore }
