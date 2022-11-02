import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
	const user = await prisma.user.create({
		data: {
				name: 'Ca-byte',
				email: 'carolinesanvieira@gmail.com',
				avatarUrl: 'https://github.com/Ca-byte.png'
		}
	})

	const pool = await prisma.pool.create({
		data: {
			title: 'Example sweepstake',
			code: 'ok0000',
			ownerId: user.id,

			participants: {
				create:{
					userId: user.id
				}
			}
		}
	})

	await prisma.game.create({
		data: {
			date: '2022-11-02T17:07:00.707Z',
			firstTeamCountryCode: 'RS',
			secondTeamCountryCode: 'BR'
		}
	})

	await prisma.game.create({
		data: {
			date: '2022-11-07T12:07:00.707Z',
			firstTeamCountryCode: 'BR',
			secondTeamCountryCode: 'AR',

			guesses: {
				create: {
					firstTeamPoints: 5,
					secondTeamPoints: 1,

					participant: {
						connect: {
							userId_poolId: {
								userId: user.id,
								poolId: pool.id
							}
						}
					}
				}
			}


		}
	})





}
main()