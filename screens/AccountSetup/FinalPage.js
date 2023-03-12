import { Text } from "react-native";
import VerifiedPage from "../../components/Verified/VerifiedPage";

function FinalPage() {
  let firstText = <Text>Account Creation Complete!</Text>;
  let secondText = <Text>Your account has been successfully created.</Text>;
  let thirdText = <Text>You can now post ads.</Text>;
  return (
    <VerifiedPage
      firstText={firstText}
      secondText={secondText}
      thirdText={thirdText}
    />
  );
}

export default FinalPage;
