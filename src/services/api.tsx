export interface Lead {
  id: string,
  name: string,
  telNumber: string,
  email: string,
  status: string,
  opportunities: string[]
}

export interface Leads {
  props: Lead[]
}

export function updateLocalStorageLeadsStatus(props: Lead) {
  var localStorageleads = downloadLeadsFromLocalStorage()
  localStorageleads = (localStorageleads.filter((lead) => {
    return lead.name !== props.name;
  }))
  localStorageleads.unshift(props)
  localStorage.removeItem('leads');
  localStorage.setItem('leads', JSON.stringify(localStorageleads))
}

export function downloadLeadsFromLocalStorage() {
  const localStorageLeads = localStorage.getItem('leads')
  const leads = localStorageLeads == null
    ? []
    : [...JSON.parse(localStorageLeads)]

  return leads;
}



