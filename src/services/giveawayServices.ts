//imports-------------------------
import type { Participant } from "../models/Participant";
import participants from "../data/participants.json"

//Service:
export const giveawayService = {
    getParticipant(): Participant[] {
        return participants;
    },

    getParticipantCount(): number {
        return participants.length;
    },
};