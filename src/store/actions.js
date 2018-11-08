export const initial = ({ commit }) => {
  commit('setInnitialData')
}

export const create = ({ commit }) => {
  commit('createEntity')
}

export const update = ({ commit }, entity) => {
  commit('updateEntity', entity)
}

export const destroy = ({ commit }, entity) => {
  commit('destroyEntity', entity)
}
