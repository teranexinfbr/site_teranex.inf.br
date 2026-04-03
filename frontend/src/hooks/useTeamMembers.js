import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useTeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeam() {
      const { data, error } = await supabase
        .from("vw_team_members")
        .select("*");

      if (error) {
        console.error(error);
        setError(error);
      } else {
        setTeamMembers(data);
      }

      setLoading(false);
    }

    fetchTeam();
  }, []);

  return { teamMembers, loading, error };
}
