// import { prisma } from '@redwoodjs/api'
import { db } from 'src/lib/db'

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

export const usercountbyCity = () => {
  return db.userProfile.groupBy({
    by: ['city'],
    _count: {
      city: true,
    },
  })
}



