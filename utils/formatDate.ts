export function formatPostedDate(createdAt: string): string {
  const postedDate = new Date(createdAt);
  const currentDate = new Date().getTime();  
  const differenceInMilliseconds = currentDate - postedDate.getTime();


  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  let formattedPostedDate;
  if (differenceInDays === 0) {
      formattedPostedDate = 'Today';
  } else if (differenceInDays === 1) {
      formattedPostedDate = 'Yesterday';
  } else {
      formattedPostedDate = `${differenceInDays} days ago`;
  }

  return formattedPostedDate;
}