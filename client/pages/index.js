import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import courseAPI from '../api/courses'

function IndexPage(props) {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    const mocks = "[{\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d2\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning French\", \"description\": \"Learning basic conversational french\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d3\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning MySQL\", \"description\": \"Learning SQL best practices\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d4\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Statistics\", \"description\": \"Learning statistics\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d5\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning next.js\", \"description\": \"Learning next.js\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d6\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Contentful\", \"description\": \"Learning how to use Contentful with ReactJS\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d7\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Cooking\", \"description\": \"Learning how to cook\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d8\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning GCP\", \"description\": \"Learning how to use GCP and Terraform for analytics\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64d9\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Python\", \"description\": \"Learning Python\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64da\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning GraphQL\", \"description\": \"Learning GraphQL\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64db\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning C Sharp\", \"description\": \"Learning C# for gaming and mobile development\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64dc\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Game Dev\", \"description\": \"Learning game development with Unity\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64dd\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning to Play the Piano\", \"description\": \"Learning how to play the piano\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64de\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning algebra\", \"description\": \"Learning alegrabra for statistics\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64df\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning algorithms\", \"description\": \"Learning common algorithm and how to design one\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64e0\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning fitness\", \"description\": \"Tips and tools for a healthier body and nutrition\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64e1\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning hacking\", \"description\": \"Learning ethical hacking\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64e2\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning bash\", \"description\": \"Learning bash to automate everyday tasks\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64e3\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning Vim\", \"description\": \"Learning how to use vim proficiently\", \"uploaded\": true}, {\"_id\": {\"$oid\": \"5c8eaaa2246320a756ef64e4\"}, \"createdAt\": {\"$date\": 1552839266802}, \"name\": \"Learning React Native\", \"description\": \"Building mobile application with React\", \"uploaded\": true}]"
    // const results = JSON.parse(await courseAPI())
    const results = JSON.parse(mocks)
    setCourses(results)
    setIsLoading(false)
  }
  useEffect(() => {
    if (!courses.length) {
      fetchData()
    }
  }, [])
  return (
    <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        Welcome to next.js!
        { isLoading ? <p>...</p> :
        <div>
          {courses.map(course => <li>{course.name}</li>)}
        </div>
      }
    </div>
  )
}

export default IndexPage
