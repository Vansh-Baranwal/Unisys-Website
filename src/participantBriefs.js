import unisys from './data/participant-unisys.json' with { type: 'json' }

// Edited participant copy for Unisys.
export const participantBriefs = [
  ...unisys.map(brief => ({ ...brief, trackSlug: 'unisys' })),
]

export function getParticipantBrief(number, trackSlug = 'unisys') {
  return participantBriefs.find(brief => brief.number === number && brief.trackSlug === trackSlug)
}
