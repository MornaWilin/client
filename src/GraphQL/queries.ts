import { gql } from '@apollo/client'

export const LOAD_BOTS = gql`
    query botFirstName {
        bot(id: 113) {
            firstName
        }
    }

`