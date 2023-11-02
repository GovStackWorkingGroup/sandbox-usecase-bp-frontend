import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Application } from "../../../../rpc/types";
import InitialIdentification from "./InitialIdentification";
import Overview from "./Overview";
import RoleForm from "./RoleForm";

export enum ROLE {
  PROPERTY_OWNER = "PROPERTY_OWNER",
  PRINCIPAL_CONTRACTOR = "PRINCIPAL_CONTRACTOR",
  LEAD_ARCHITECT_OR_ENGINEER = "LEAD_ARCHITECT_OR_ENGINEER",
  OTHER = "OTHER",
}

export interface RoleData {
  name: string | null;
  idNumber: string | null;
}

const initialState = {
  [ROLE.PROPERTY_OWNER]: { name: null, idNumber: null },
  [ROLE.PRINCIPAL_CONTRACTOR]: { name: null, idNumber: null },
  [ROLE.LEAD_ARCHITECT_OR_ENGINEER]: { name: null, idNumber: null },
  [ROLE.OTHER]: { name: null, idNumber: null },
};

type ActionType = "EDIT_ROLE";

export interface RoleAction {
  type: ActionType;
  role: ROLE;
  data: RoleData;
}

function rolesReducer(state = initialState, action: RoleAction) {
  switch (action.type) {
    case "EDIT_ROLE":
      return { ...state, [action.role]: action.data };
    default:
      return state;
  }
}

export default function Identification() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [idNumber, setIdNumber] = useState<string>("9164993");
  const [name, setName] = useState<string>("Lewis Mumford");
  const [selectedRole, setSelectedRole] = useState<ROLE>(ROLE.PROPERTY_OWNER);
  const [isFinished, setIsFinished] = useState(false);
  const [state, dispatch] = useReducer(rolesReducer, initialState);
  const handleRoleChange = (e: ChangeEvent) => {
    setSelectedRole((e.target as HTMLSelectElement).value as ROLE);
  };

  const handleSave = () => {
    const storage = localStorage.getItem("application");
      if (storage) {
        const application = JSON.parse(storage) as Application;
        Object.keys(state).map((key, index) => {
          application.identification.push({role: key as ROLE, data: Object.values(state)[index]})
      });
      localStorage.setItem("application", JSON.stringify(application));
      navigate(`../${id}`);
    }
  }

  const handleContinue = () => {
    if (!isFinished) {
      dispatch({
        type: "EDIT_ROLE",
        role: selectedRole,
        data: { name, idNumber },
      });
      setIdNumber("");
      setName("");
      roleToFill && setSelectedRole(roleToFill);
    } else {
      const storage = localStorage.getItem("application");
      if (storage) {
        const application = JSON.parse(storage) as Application;
        Object.keys(state).map((key, index) => {
          application.identification = [...application.identification.filter((role) => role.role != key), {role: key as ROLE, data: Object.values(state)[index]}];
      });
        localStorage.setItem("application", JSON.stringify(application));
        if (application.identification.length < 1) navigate(`../${id}/identification`)
        else if (application.pendingDocuments.length > application.documents.length) navigate(`../${id}/documents`);
        else navigate(`../${id}`);
      } else {
        return navigate("../../construction-permit");
      }
    }
  };
  const isFirstIdentification = useMemo(() => {
    return !Object.values(state).some((el) => el.idNumber && el.name);
  }, [state]);
  const roleToFill = useMemo(() => {
    const role = Object.entries(state).find(
      ([key, val]) => !val.idNumber && !val.name,
    );
    if (role) {
      return role[0] as ROLE;
    }
    return null;
  }, [state]);

  useEffect(() => {
    if (roleToFill === ROLE.OTHER) {
      setIsFinished(true);
    }
    if (roleToFill && roleToFill !== ROLE.OTHER) {
      setSelectedRole(roleToFill);
    }
  }, [roleToFill]);
  return (
    <>
      <Flex gap="20px" direction="column">
        <Heading size="md" variant="title">
          Identification
        </Heading>
        {isFinished ? (
          <Overview state={state} />
        ) : (
          <>
            {isFirstIdentification ? (
              <InitialIdentification
                selectedRole={selectedRole}
                handleRoleChange={handleRoleChange}
              />
            ) : (
              <RoleForm
                name={name}
                id={idNumber}
                role={roleToFill ?? ROLE.LEAD_ARCHITECT_OR_ENGINEER}
                setId={setIdNumber}
                setName={setName}
              />
            )}
          </>
        )}
      </Flex>
      <Flex marginTop="auto" mb="20px">
        <ButtonGroup flexDirection="column" w="100%" gap="10px">
          <Button onClick={() => handleContinue()} colorScheme="admin">
            Continue
          </Button>
          <Button onClick={() => handleSave()} variant="outline" colorScheme="admin">
            Save for later
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
