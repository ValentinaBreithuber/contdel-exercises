from src.msd_module.string_manipulator import reverse_string

def reverse_sentence(sentence):
    words = sentence.split(" ")
    reversed_words = [reverse_string(word) for word in words]
    return " ".join(reversed_words)
