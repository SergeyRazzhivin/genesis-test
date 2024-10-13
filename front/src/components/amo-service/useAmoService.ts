import { ref } from 'vue'

import appAxios from '../../appAxios.ts'
import { company, contact, deal } from '../shared/mockData.ts'

import { ACTION_TYPES } from './amoServiceTypes.ts'

const deals = ref([])
const contacts = ref([])
const companies = ref([])
const entityActions = ref<ACTION_TYPES>([
  ACTION_TYPES.NOT_SELECTED,
  ACTION_TYPES.DEAL,
  ACTION_TYPES.CONTACT,
  ACTION_TYPES.COMPANY,
])
const selectedAction = ref(ACTION_TYPES.NOT_SELECTED)
const isPreloader = ref(false)
export default function () {
  async function createDeal() {
    const { data } = await appAxios.post('/create-deal', deal)
    deals.value.push(...data._embedded.leads)
    return deals
  }
  async function createContact() {
    const { data } = await appAxios.post('/create-contact', contact)
    contacts.value.push(...data._embedded.contacts)
    return data
  }
  async function createCompany() {
    const { data } = await appAxios.post('/create-company', company)
    companies.value.push(...data._embedded.companies)
    return data
  }

  async function createEntity(entityName) {
    isPreloader.value = true
    if (entityName === ACTION_TYPES.DEAL) {
      await createDeal()
    }
    if (entityName === ACTION_TYPES.CONTACT) {
      await createContact()
    }
    if (entityName === ACTION_TYPES.COMPANY) {
      await createCompany()
    }
    isPreloader.value = false
  }

  return {
    deals,
    companies,
    contacts,
    entityActions,
    selectedAction,
    isPreloader,
    createEntity,
  }
}
