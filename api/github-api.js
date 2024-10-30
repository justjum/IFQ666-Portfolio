

export default async function getGit() {
    const res = await fetch('https://api.github.com/users/justjum/repos')
    const profile = res.json();
    console.log(profile);
    return profile;
}