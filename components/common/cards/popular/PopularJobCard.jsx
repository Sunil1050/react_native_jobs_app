import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ jobDetail, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, jobDetail)}
      onPress={() => handleCardPress(jobDetail)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, jobDetail)}>
        <Image
          source={{
            uri: checkImageURL(jobDetail?.employer_logo)
              ? jobDetail.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {jobDetail.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, jobDetail)} numberOfLines={1}>
          {jobDetail.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, jobDetail)}>
            {jobDetail?.job_publisher} -
          </Text>
          <Text style={styles.location}> {jobDetail.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;