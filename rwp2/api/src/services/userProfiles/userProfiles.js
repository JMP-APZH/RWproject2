// import { prisma } from '@redwoodjs/api'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const userProfiles = () => {
  return db.userProfile.findMany()
}

export const userProfile = ({ id }) => {
  return db.userProfile.findUnique({
    where: { id },
  })
}

export const createUserProfile = ({ input }) => {
  return db.userProfile.create({
    data: input,
  })
}

export const updateUserProfile = ({ id, input }) => {
  return db.userProfile.update({
    data: input,
    where: { id },
  })
}

export const deleteUserProfile = ({ id }) => {
  return db.userProfile.delete({
    where: { id },
  })
}

export const userprofileCount = () => {
  return db.userProfile.count()
}

// export const cityCounts1 = await prisma.userprofile.aggregate({
//   _count: {
//     city: true,
//   },
// })

// export const cityCounts2 = await db.userProfile.aggregate({
//   _count: {
//     city: true,
//   },
// })

export const cityCounts3 = () => {
  return db.userProfile.aggregate({
    _count: {
      city: RIVIERESALEE,
    },
  })
}



export const usercountbyCity = async () => {
  const result = await db.userProfile.groupBy({
    by: ['city'],
    _count: {
      city: true,
    },
  })
  // const mappedCity = result.map((item) => {
  //   city: item.city,
  //   numberOfUser: item['_count'].city
  // })
  // return (mappedCity)
  logger.debug({custom: result}, 'result from Prisma')
  const mappedCity = result.map((item) => { return {
    city: item.city,
    numberOfUser: item['_count'].city
  }})
  return mappedCity
}

export const usercountbyGender = async () => {
  const result = await db.userProfile.groupBy({
    by: ['gender'],
    _count: {
      gender: true,
    },
  })
  logger.debug({custom: result}, 'result from Prisma')
  const mappedGender = result.map((item) => { return {
    gender: item.gender,
    numbofUserG: item['_count'].gender
  }})
  return mappedGender
}



