import { useAuthStore } from "~/stores/authStore"
// import { useProfileStore } from "~/stores/profile"
// import { useGeneralStore } from "~/stores/general"

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            authStore: useAuthStore(),
        },
    }
})