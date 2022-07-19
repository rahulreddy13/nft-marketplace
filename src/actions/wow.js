export const AUTHENTICATED = 'AUTHENTICATED';

export function Authenticate(payload){
  return {
    type: AUTHENTICATED,
    payload
  };
}