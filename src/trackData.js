import { createUnisysTrack } from './unisysTrack.js'

function createTrackBase({ title, slug, page, numeral, ...details }) {
  return {
    title,
    slug,
    page,
    path: `/${page}`,
    problemsPage: `${page}/problems`,
    problemsPath: `/${page}/problems`,
    numeral,
    isMock: false,
    problemStatements: [],
    resources: [],
    ...details,
  }
}

const unisys = createUnisysTrack({
  ...createTrackBase({ title: 'Codered 26 × unisys', slug: 'track-5', page: 'tracks/track-5', numeral: '05', briefOwner: 'unisys' }),
  selectionNotice: 'Participants who choose this problem statement will be required to sign a non-disclosure agreement (NDA). Unisys will own all intellectual property rights to the project, and participants may not pursue or continue the project after the event.',
})

export const tracks = [unisys]
export const allTracks = [unisys]
export const getTrackByPage = page => allTracks.find(track => track.page === page)

export const trackRoutes = allTracks.flatMap(track => [
  { page: track.page, path: track.path, kind: 'overview', track, brief: track },
  { page: track.problemsPage, path: track.problemsPath, kind: 'problems', track },
  ...track.problemStatements.map(brief => ({ page: brief.page, path: brief.path, kind: 'brief', track, brief })),
])
export const getTrackRoute = page => trackRoutes.find(route => route.page === page)
