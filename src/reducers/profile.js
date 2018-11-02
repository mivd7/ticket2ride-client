const UPDATE_PROFILE = 'UPDATE_PROFILE';

export default (state = null, {type, payload}) => {
  switch (type) {
    case UPDATE_PROFILE:
        return payload.reduce((profiles, profile) => {
            profiles[profile.user_id] = profile
            return profile
        }, {});
    default:
      return state;
  }
}
