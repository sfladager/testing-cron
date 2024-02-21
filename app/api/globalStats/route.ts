import { NextResponse } from 'next/server'
import prisma from '../../../prisma/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const globalStatsRes = await prisma.globalStats.findUnique({
      where: {
        id: 'clrtdtxf40002jy764kilz9v7',
      },
    })

    const globalStats = globalStatsRes

    if (!globalStats) {
      return NextResponse.json({ message: 'Not Found'}, { status: 404})
    }
    return NextResponse.json({ message: 'success', globalStats}, { status: 200})
  } catch (err) {
    return NextResponse.json({ message: 'error', err}, { status: 500})
  }
}
