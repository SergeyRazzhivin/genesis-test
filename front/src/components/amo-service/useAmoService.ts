import { ref } from 'vue'

import appAxios from '../../appAxios.ts'

const deal = [
  {
    name: 'SR',
    created_by: 0,
    price: 20000,
    tags_to_add: [
      {
        name: 'Первый тег',
      },
      {
        id: 217261,
      },
    ],
  },
]
const contact = [
  {
    first_name: 'Петр',
    last_name: 'Смирнов',
  },
]
const company = [
  {
    name: 'АО Рога и Копыта',
    custom_fields_values: [
      {
        field_code: 'PHONE',
        values: [
          {
            value: '+7912322222',
            enum_code: 'WORK',
          },
        ],
      },
    ],
  },
]
const deals = ref([])
const contacts = ref([])
const companies = ref([])
const entityActions = ref(['Не выбрано', 'Сделка', 'Контакт', 'Компания'])
const selectedAction = ref(entityActions.value[0])
const isPreloader = ref(false)
export default function () {
  async function createDeal() {
    const { data } = await appAxios.post(
      'http://localhost:3000/create-deal',
      deal,
    )
    console.log(data)
    deals.value.push(...data._embedded.leads)
    return deals
  }
  async function createContact() {
    const { data } = await appAxios.post(
      'http://localhost:3000/create-contact',
      contact,
    )
    contacts.value.push(...data._embedded.contacts)
    return data
  }
  async function createCompany() {
    const { data } = await appAxios.post(
      'http://localhost:3000/create-company',
      company,
    )
    companies.value.push(...data._embedded.companies)
    return data
  }

  async function createEntity(entityName) {
    isPreloader.value = true
    if (entityName === 'Сделка') {
      await createDeal()
    }
    if (entityName === 'Контакт') {
      await createContact()
    }
    if (entityName === 'Компания') {
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
