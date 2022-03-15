import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_BOTS } from '../GraphQL/queries'
export const GetBots = () => {

  const { error, loading, data } = useQuery(LOAD_BOTS)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>Hi</div>
  )
}
