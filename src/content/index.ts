import credentialsJson from './credentials.json'
import engagementsJson from './engagements.json'
import experienceJson from './experience.json'
import profileJson from './profile.json'
import type { Credential, Engagement, Profile, Role, Section } from '../types/content'

/* JSON is the editable source of truth (see docs/FOLDER_STRUCTURE.md).
   These assertions are the single typed boundary — components import from
   here, never from the .json files directly. */

export const profile = profileJson as Profile
export const engagements = engagementsJson as Section<Engagement>
export const experience = experienceJson as Section<Role>
export const credentials = credentialsJson as Section<Credential>
